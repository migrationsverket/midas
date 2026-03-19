import{r as m,f as l,j as t}from"./iframe-Boi322-e.js";import{S as d}from"./SearchField-D3pRVMPI.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-pPK2erYn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-z1j4bIi1.js";import"./clsx-B-dksMZM.js";import"./Form-Co5HaTHR.js";import"./useFocusRing-CkCvH5DS.js";import"./index-Cvkkkaql.js";import"./index-s4s_PHwE.js";import"./Input-CG9S7cb5.js";import"./Hidden-Cxs5fcIU.js";import"./Button-BZrkaF7s.js";import"./useLabels-DbPeSc60.js";import"./useButton-aRTTkymG.js";import"./FieldError-CghXp7Fo.js";import"./Text-bXt2bHa-.js";import"./clsx-Ciqy0D92.js";import"./Text-D7z3Z1mn.js";import"./RSPContexts-CQ86iZLn.js";import"./Group-DTgLm_AU.js";import"./useControlledState-CJDuseoe.js";import"./useLocalizedStringFormatter-BdYnyh_u.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DSk9WCGP.js";import"./useField-ChTCt58t.js";import"./TextField.module-DdivwlC8.js";import"./search-DS6Mt5TD.js";import"./createLucideIcon-C52beLhx.js";import"./x-chi6RhK4.js";import"./useLocalizedStringFormatter-DQv5OY2h.js";import"./Button-BbOSYGn_.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CV_gcmgX.js";import"./Collection-C_Ee4okz.js";import"./index-hNEIOhKB.js";import"./DragAndDrop-CR1tENOZ.js";import"./getScrollParent-C8E3tpWG.js";import"./scrollIntoView-xxfCmNq8.js";import"./SelectionIndicator-DbUjPPJv.js";import"./SelectionManager-CeqfsY14.js";import"./useEvent-CDk6Ke-x.js";import"./useDescription-CQ5vqFNH.js";import"./inertValue-FebFp4m-.js";import"./useHighlightSelectionDescription-gWV4sfvl.js";import"./useUpdateEffect-Cy3bzWKY.js";import"./ListKeyboardDelegate-D-uh4i55.js";import"./useHasTabbableChild-i1MePvGv.js";import"./Checkbox-37bbUfTT.js";import"./check-DPwEkdC6.js";import"./useToggleState-Ddpmi2Lj.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
