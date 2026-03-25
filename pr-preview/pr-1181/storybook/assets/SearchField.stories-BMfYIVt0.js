import{r as m,f as l,j as t}from"./iframe-BP7DzUIh.js";import{S as d}from"./SearchField-DNZxEacD.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B_WNTldu.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B9_czYqy.js";import"./clsx-B-dksMZM.js";import"./Form-BAJVgpQE.js";import"./useFocusRing-Apf-8Fr7.js";import"./index-B1MenRgK.js";import"./index-B9Re-I8w.js";import"./Input-CXA6qDBj.js";import"./Hidden-DlKvXDgO.js";import"./Button-yD28QKfx.js";import"./useLabels-B0kKOJyy.js";import"./useButton-DTicc54w.js";import"./FieldError-DwMEu-CZ.js";import"./Text-C6QCLAD1.js";import"./clsx-Ciqy0D92.js";import"./Text-C-lFPFDT.js";import"./RSPContexts-C286y1L4.js";import"./Group-DxEw32Ds.js";import"./useControlledState-B7al1qBg.js";import"./useLocalizedStringFormatter-Dp1Z2nGk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BJ5rsHJP.js";import"./useField-p1IS5Xfo.js";import"./TextField.module-DdivwlC8.js";import"./search-CkYbVup_.js";import"./createLucideIcon-zXtIRWL6.js";import"./x-BKCqd2ot.js";import"./useLocalizedStringFormatter-D_dEcD2V.js";import"./Button-e7FuQA8u.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CFJkh_29.js";import"./Collection-CEHuK8QM.js";import"./index-CqTzYnk-.js";import"./DragAndDrop-CV11htOt.js";import"./getScrollParent-CMfkxxdv.js";import"./scrollIntoView-BqUk0Mej.js";import"./SelectionIndicator-3vIypJAh.js";import"./SelectionManager-CcZ5FS4I.js";import"./useEvent-boX-2EsT.js";import"./useDescription-B4UE-M1p.js";import"./inertValue-C6RIglWv.js";import"./useHighlightSelectionDescription-CmQhh8Dn.js";import"./useUpdateEffect-BFTR4-zE.js";import"./ListKeyboardDelegate-D_F26l9l.js";import"./useHasTabbableChild-BegudL3t.js";import"./Checkbox-B1lbJgkR.js";import"./check-4FHh4X7_.js";import"./useToggleState-CdgQZ47W.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
