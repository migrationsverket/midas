import{r as m,f as l,j as t}from"./iframe-BaDPacjd.js";import{S as d}from"./SearchField-BOb-bYRc.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CxsAmXgo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DIlgsg9w.js";import"./clsx-B-dksMZM.js";import"./Form-oBhPq7WZ.js";import"./useFocusRing-CU-3-Yvs.js";import"./index-Nc8_JSKj.js";import"./index-DARPjNQR.js";import"./Input-BrXEUkLM.js";import"./Hidden-wYkIMllK.js";import"./Button-xqG4BSxe.js";import"./useLabel-CEPds_v5.js";import"./useLabels-DVtm5qiG.js";import"./useButton-CWKA-NcB.js";import"./FieldError-CCoQDHBS.js";import"./Text-D9IIAziF.js";import"./clsx-Ciqy0D92.js";import"./Text-maDwTHxG.js";import"./RSPContexts-Q8mL0bRp.js";import"./Group-DLvsScbU.js";import"./useControlledState-C7Qyb7bs.js";import"./useLocalizedStringFormatter-D18yrwwN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BfD0yxsi.js";import"./useField-DIToGq9j.js";import"./TextField.module-DdivwlC8.js";import"./search-BJ2tDsGa.js";import"./createLucideIcon-Cn3KNUPN.js";import"./x-CIJW-8OQ.js";import"./useLocalizedStringFormatter-B8-NJo2o.js";import"./Button-BbMcm-s_.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cc7_mEU0.js";import"./Collection-DwVoD4ZF.js";import"./index-zgqX2Yvv.js";import"./DragAndDrop-DfQctP2N.js";import"./getScrollParent-CQLO__Ec.js";import"./scrollIntoView-DP2ELaPl.js";import"./SelectionIndicator-E2Oo2YPO.js";import"./SelectionManager-CWk_F_tK.js";import"./useEvent-DWbcd_98.js";import"./useDescription-4MxSlUac.js";import"./inertValue-sQ4tLOnZ.js";import"./useHighlightSelectionDescription-C8-vArFp.js";import"./useUpdateEffect-BOi3uH8F.js";import"./ListKeyboardDelegate-BvsWrhNC.js";import"./useHasTabbableChild-DoTSyXXA.js";import"./Checkbox-CZA569Uq.js";import"./check-Bzjymqaq.js";import"./useToggleState-Bz_hR2Az.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
