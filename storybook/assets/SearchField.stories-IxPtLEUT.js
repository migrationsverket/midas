import{r as m,f as l,j as t}from"./iframe-C1OFF234.js";import{S as d}from"./SearchField-CbjfYYRc.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DVdmPMIC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D7t5NlDI.js";import"./utils-x5dDW9rF.js";import"./useLocalizedStringFormatter-Bzedv_wh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BOpH5wSt.js";import"./useFocusRing-JwpRizWK.js";import"./index-D4URSzcq.js";import"./index-eVP2pS4l.js";import"./useFormValidation-Cris4O5F.js";import"./useField-CsO-x6FD.js";import"./Button-tVK2UY63.js";import"./Hidden-BozQ0zHL.js";import"./useLabels-Cjzy89EL.js";import"./useButton-Dq-U0g3P.js";import"./search-BFxYRKmS.js";import"./createLucideIcon-CLCZDCft.js";import"./ClearButton-DcPYp8yF.js";import"./Button-DnTBefjE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BVNI7-AU.js";import"./VisuallyHidden-BoMhy8hX.js";import"./x-BFahTfcI.js";import"./FieldError-BmlSVkKV.js";import"./Text-BAGfifAI.js";import"./Text-DdQgr9hb.js";import"./RSPContexts-BR-G7MnE.js";import"./Collection-BQBeQ6Sk.js";import"./index-BgTylcky.js";import"./DragAndDrop-DPiU3WEL.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BM7fVV0w.js";import"./SelectionManager-CHinLA4t.js";import"./useEvent-BTaNZmDL.js";import"./useDescription-D1uoBPC6.js";import"./inertValue-B-oDUn7A.js";import"./useHighlightSelectionDescription-BM3c_YMS.js";import"./useUpdateEffect-CYi0l6sh.js";import"./ListKeyboardDelegate-zd0Lvbor.js";import"./useHasTabbableChild-CmWZ18W-.js";import"./Checkbox-CwNz1pqX.js";import"./Form-OhvG1ote.js";import"./check-Da8p5vVx.js";import"./useToggleState-B3CwcJIE.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
