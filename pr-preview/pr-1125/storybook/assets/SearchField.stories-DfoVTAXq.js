import{r as m,f as l,j as t}from"./iframe-CvP1jW3H.js";import{S as d}from"./SearchField-akdr4g00.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BfLrG0F6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-JtInM6A8.js";import"./clsx-B-dksMZM.js";import"./Form-l6bgYXBG.js";import"./useFocusRing-CbbdQhlq.js";import"./index-DfJv0pAU.js";import"./index-yjciiip6.js";import"./Input-DXvM12Ta.js";import"./Hidden-JUleaqc2.js";import"./Button-DxNv6VEa.js";import"./useLabels-CkliYhxT.js";import"./useButton-B7hEU-Yu.js";import"./FieldError-nU5bP6xe.js";import"./Text-vBZSXrPV.js";import"./clsx-Ciqy0D92.js";import"./Text-DvtHA-H_.js";import"./RSPContexts-y85Y3Ar7.js";import"./Group-h3C5SIrw.js";import"./useControlledState-JSgnBBPW.js";import"./useLocalizedStringFormatter-XI0I9Ge3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C0R3KJeM.js";import"./useField-BwjqvGp1.js";import"./TextField.module-DdivwlC8.js";import"./search-CcBddAd-.js";import"./createLucideIcon-CmBW2oBj.js";import"./x-Cq96u2iw.js";import"./useLocalizedStringFormatter-DZiVR27P.js";import"./Button-DsV2n0cy.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DKHlsSRZ.js";import"./Collection-ChyF6Ibn.js";import"./index-C3fTgA_v.js";import"./DragAndDrop-m6cNDNre.js";import"./getScrollParent-Djq9HB-Y.js";import"./scrollIntoView-DRuWzNUG.js";import"./SelectionIndicator-9xjHaAPC.js";import"./SelectionManager-DijnHxKd.js";import"./useEvent-D_9UE99K.js";import"./useDescription-DcTuAIR2.js";import"./inertValue-CIhoQL7-.js";import"./useHighlightSelectionDescription-CklMF8_O.js";import"./useUpdateEffect-C_c1HJ9z.js";import"./ListKeyboardDelegate-CHiB5u_C.js";import"./useHasTabbableChild-B1RqspcU.js";import"./Checkbox-BIu-LAJj.js";import"./check-ozsrqIH3.js";import"./useToggleState-Bjt2nvdz.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
