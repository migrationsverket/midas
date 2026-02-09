import{r as m,f as l,j as t}from"./iframe-D6IpBoiw.js";import{S as d}from"./SearchField-BhhMr_3W.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CxjELyIy.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CLuCJDnt.js";import"./utils-DrRnVz6M.js";import"./useLocalizedStringFormatter-S2cYCAmY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CxlXJA65.js";import"./useFocusRing-DDjRvQVt.js";import"./index-Dke63n0T.js";import"./index-Cdvq_tAn.js";import"./useFormValidation-C0YcTuLl.js";import"./useField-C36_1XdQ.js";import"./Button-ho_h7HBc.js";import"./Hidden-CzdFjV_G.js";import"./useLabels-Ca7mubzD.js";import"./useButton-BZVVg511.js";import"./search-BRVkgXlz.js";import"./createLucideIcon-C8Gze4Yd.js";import"./ClearButton-SjQHIf2k.js";import"./Button-Cb8vfEHL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D7KJljx3.js";import"./VisuallyHidden-CvlpTHpP.js";import"./x-BQZH2C42.js";import"./FieldError-D84PxaCJ.js";import"./Text-DAWTtlkt.js";import"./Text-qQ3S5Jc_.js";import"./RSPContexts-DEazweFL.js";import"./Collection-BXe7XviT.js";import"./index-D-8A3CKx.js";import"./DragAndDrop-BjUpSSrh.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bm7ArBIF.js";import"./SelectionManager-BdDUSQWT.js";import"./useEvent-D0T-5SZD.js";import"./useDescription-Cef-uVL5.js";import"./inertValue-PVSuPQVV.js";import"./useHighlightSelectionDescription-DanaoyJT.js";import"./useUpdateEffect-BuaxQynw.js";import"./ListKeyboardDelegate-BafDUYsL.js";import"./useHasTabbableChild-BwV7CQom.js";import"./Checkbox-CyMmrs5M.js";import"./Form-Csw1KBWi.js";import"./check-ByJ3Yi9G.js";import"./useToggleState-BTFzzIWQ.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
