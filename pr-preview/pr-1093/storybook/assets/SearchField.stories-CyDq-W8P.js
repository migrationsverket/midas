import{r as m,f as l,j as t}from"./iframe-DsfFtxS2.js";import{S as d}from"./SearchField-C0XVjh65.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-yBKH35x9.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DnlDaLL1.js";import"./utils-CiHeKsB_.js";import"./useLocalizedStringFormatter-BJ5DWpkF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-31tCsnnV.js";import"./useFocusRing-1z_ufVt_.js";import"./index-DgLlfILw.js";import"./index-DnB7KTmW.js";import"./useFormValidation-B-yMnowL.js";import"./useField-DWMKBFFt.js";import"./Button-BUGcuGOU.js";import"./Hidden-Bs3ILcuK.js";import"./useLabels-MWmyC4Dm.js";import"./useButton-D8CT0FKr.js";import"./search-R-HQhTWu.js";import"./createLucideIcon-B2R5tymB.js";import"./ClearButton-D2RHW8cG.js";import"./Button-4tH0viW2.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DZ4cvEMe.js";import"./VisuallyHidden-DfQN_1Bp.js";import"./x-BIaZFj52.js";import"./FieldError-87EUhy5h.js";import"./Text-DAqpMgoy.js";import"./Text-BpQb7gs6.js";import"./RSPContexts-jD7fw_oN.js";import"./Collection-CYyT56Hz.js";import"./index-XJC_7r9v.js";import"./DragAndDrop-CCYyl8VQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ByFt_7yz.js";import"./SelectionManager-xps8xe94.js";import"./useEvent-Ck1U2V-h.js";import"./useDescription-D22BvyuU.js";import"./inertValue-D8wczNMJ.js";import"./useHighlightSelectionDescription-CmUM6mCC.js";import"./useUpdateEffect-bv54uylV.js";import"./ListKeyboardDelegate-C0g_y3Uk.js";import"./useHasTabbableChild-yNk8wAC6.js";import"./Checkbox-DvPh3ViJ.js";import"./Form-D_rqxDoy.js";import"./check-BFjo-E2y.js";import"./useToggleState-B-5QtxSP.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
