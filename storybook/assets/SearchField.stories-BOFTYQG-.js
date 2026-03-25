import{r as m,f as l,j as t}from"./iframe-Bau-Vb-U.js";import{S as d}from"./SearchField-lX5Sqt-S.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CRoRlp0p.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DzohMAvG.js";import"./clsx-B-dksMZM.js";import"./Form-Ci16kZpr.js";import"./useFocusRing-DBI5s8iT.js";import"./index-BwaX680v.js";import"./index-dRKp6bPQ.js";import"./Input-DLVIJ28g.js";import"./Hidden-ygOXplTE.js";import"./Button-nyoR5AiN.js";import"./useLabels-DfW1moGm.js";import"./useButton-QnWp_Okq.js";import"./FieldError-C4-I9rBv.js";import"./Text-CCFXQNDk.js";import"./clsx-Ciqy0D92.js";import"./Text-CnUTPFtZ.js";import"./RSPContexts-Ci7lzjgK.js";import"./Group-DoN2xJaD.js";import"./useControlledState-B-7lzpTq.js";import"./useLocalizedStringFormatter-D2MeKTbB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dxtjgl1W.js";import"./useField-CoKhaZ76.js";import"./TextField.module-DdivwlC8.js";import"./search-NMrhBl9C.js";import"./createLucideIcon-Di4Tit0m.js";import"./x-Bn5zNUwZ.js";import"./useLocalizedStringFormatter-CNmU83eC.js";import"./Button-BCWlvYFn.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-HpJjECW7.js";import"./Collection-zEnqGodL.js";import"./index-OEhMN9pE.js";import"./DragAndDrop-BvvvDLQa.js";import"./getScrollParent-CNAv_Fjp.js";import"./scrollIntoView-DtuGpqr3.js";import"./SelectionIndicator-9wEoKMBQ.js";import"./SelectionManager-fg2ccwC3.js";import"./useEvent-CVCmvDjB.js";import"./useDescription-kPv3UG3t.js";import"./inertValue-CmDRDtNb.js";import"./useHighlightSelectionDescription-BAJGcOOz.js";import"./useUpdateEffect-DIrzL4Rl.js";import"./ListKeyboardDelegate-qWSthOhk.js";import"./useHasTabbableChild-CmmTHRBO.js";import"./Checkbox-TeBkJLef.js";import"./check-elsZFRem.js";import"./useToggleState-D_NfFSRq.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
