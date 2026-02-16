import{r as m,f as l,j as t}from"./iframe-CgVDPXCW.js";import{S as d}from"./SearchField-4pkzNJBR.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BT0ZuzaH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CaasPkxS.js";import"./utils-DcVVHZ67.js";import"./useLocalizedStringFormatter-D49bO5T8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DnjEhot0.js";import"./useFocusRing-DNBotD7g.js";import"./index-DvqiEU7D.js";import"./index-KB8h2jjm.js";import"./useFormValidation-B0q062rA.js";import"./useField-BOKIbcIE.js";import"./Button-CQnF2GG8.js";import"./Hidden-CXNfA9DQ.js";import"./useLabels-BHxP37I4.js";import"./useButton-BWlYYLVQ.js";import"./search-DvJ_DDUv.js";import"./createLucideIcon-xwY9ORJx.js";import"./ClearButton-BOhcEwgF.js";import"./Button-D1lh8tZn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-als5sVnS.js";import"./VisuallyHidden-Ded5YgLE.js";import"./x-4d7UDHPb.js";import"./FieldError-BON66wFU.js";import"./Text-By5oRQCE.js";import"./Text-C_oGJ_xm.js";import"./RSPContexts-4u-QqjZM.js";import"./Collection-BhV9AUYd.js";import"./index-B9AEiTqw.js";import"./DragAndDrop-31t4x3sm.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Her58Z3x.js";import"./SelectionManager-BH57UAK3.js";import"./useEvent-D87hVJVV.js";import"./useDescription-gbmfQOlg.js";import"./inertValue-Ci7O86E7.js";import"./useHighlightSelectionDescription-Dd_Nx2Th.js";import"./useUpdateEffect-pVd9Sb2a.js";import"./ListKeyboardDelegate-BBIA4umz.js";import"./useHasTabbableChild-C1jSPEqM.js";import"./Checkbox-mubJKtSv.js";import"./Form-DaNhyeML.js";import"./check-BgCdnUge.js";import"./useToggleState-B7duYbbO.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
