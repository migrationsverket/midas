import{r as m,f as l,j as t}from"./iframe-BDLZKJUa.js";import{S as d}from"./SearchField-BYl8VI4I.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DdilmW61.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CBybevG0.js";import"./utils-BN5a6ONf.js";import"./useLocalizedStringFormatter-grQ0fku2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-V_xpj0z0.js";import"./useFocusRing-B5FtCOQQ.js";import"./index-BCWLJOvr.js";import"./index-DfTmM_Vy.js";import"./useFormValidation-DTB8faqq.js";import"./useField-CuQudl8J.js";import"./Button-C9Vdx1Sb.js";import"./Hidden-U_iFDsIn.js";import"./useLabels-BQwmeXXN.js";import"./useButton-BOuekyb0.js";import"./search-Bab494cP.js";import"./createLucideIcon-1UHjhtvK.js";import"./ClearButton-BaZc3b8h.js";import"./Button-BBKL1eD8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-00J5Ylgv.js";import"./VisuallyHidden-C2Ytvwha.js";import"./x--FAB3bcS.js";import"./FieldError-CQnsXSuf.js";import"./Text-6K4677wX.js";import"./Text-DDCBPVqL.js";import"./RSPContexts-Da5lgWhk.js";import"./Collection-Ctbsu1Ee.js";import"./index-DDU-vaR7.js";import"./DragAndDrop-DyISF8jc.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BqeOPuev.js";import"./SelectionManager-BY3loXtx.js";import"./useEvent-uVAMedq9.js";import"./useDescription-C_6bjMde.js";import"./inertValue-Coof6zM8.js";import"./useHighlightSelectionDescription-BBnClHF7.js";import"./useUpdateEffect-grjxR7p0.js";import"./ListKeyboardDelegate-BkFW1SaD.js";import"./useHasTabbableChild-BBmniF8N.js";import"./Checkbox-Baib1Xfr.js";import"./Form-DSI4EmM7.js";import"./check-CTP97BLe.js";import"./useToggleState-CtzwzmY4.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
