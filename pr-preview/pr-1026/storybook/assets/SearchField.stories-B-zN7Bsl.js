import{r as m,f as l,j as t}from"./iframe-DE94JxKi.js";import{S as d}from"./SearchField-DVnNwK6j.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Bq19slRG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DaJ4jGU6.js";import"./utils-BSOOAzhj.js";import"./useLocalizedStringFormatter-Cru1T8gU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BCtL7hz6.js";import"./useFocusRing-DmvBk8aR.js";import"./index-BQx7fnJU.js";import"./index-hBdvredO.js";import"./useFormValidation-B28FtqGe.js";import"./useField-DbCKfJpx.js";import"./Button-Dg3ONjJw.js";import"./Hidden-BxoJfOoH.js";import"./useLabels-D7kdm8Gs.js";import"./useButton-BdK2-QNE.js";import"./search-eHyoBQ2m.js";import"./createLucideIcon-DBTUrtr9.js";import"./ClearButton-Dl5hOasb.js";import"./Button-DMOZPxBs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CqNL9jQY.js";import"./VisuallyHidden-B9PXbOcp.js";import"./x-Gg2oVTGU.js";import"./FieldError-BXtDsO41.js";import"./Text-DfN54vrW.js";import"./Text-DHcXS7hp.js";import"./RSPContexts-B_fFGJM5.js";import"./Collection-_6FJlRQd.js";import"./index-B_B9ITvM.js";import"./DragAndDrop-dkAUO7hm.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BqGgoiG-.js";import"./SelectionManager-BIzWN-JW.js";import"./useEvent-DHt8qmHW.js";import"./useDescription-CR6YrqIA.js";import"./inertValue-DBIez601.js";import"./useHighlightSelectionDescription-Ck_LG8ph.js";import"./useUpdateEffect-B_SNtFpA.js";import"./ListKeyboardDelegate-1nrdAhpB.js";import"./useHasTabbableChild-rBMElKAM.js";import"./Checkbox-ScVc9Gge.js";import"./Form-BOsKgB3e.js";import"./check-DvFF8BuG.js";import"./useToggleState-F46J7mfp.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
