import{r as m,f as l,j as t}from"./iframe-Di5CTR8T.js";import{S as d}from"./SearchField-B-gaC6JP.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D1vCGPZU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CtBItuGe.js";import"./clsx-B-dksMZM.js";import"./Form-q1oODmDm.js";import"./useFocusRing-DrwftOie.js";import"./index-DitNwB70.js";import"./index-DBHfn5s_.js";import"./Input-CM0xH0-G.js";import"./Hidden-sHhuPHwe.js";import"./Button-2OtSDF-S.js";import"./useLabel-B2_1exfs.js";import"./useLabels-B1J-T3xq.js";import"./useButton-C1jCWvmO.js";import"./FieldError-Bv2rXWOC.js";import"./Text-ZJfVqn-h.js";import"./clsx-Ciqy0D92.js";import"./Text-n28vbpm4.js";import"./RSPContexts-DB30PmIp.js";import"./Group-D3mEeqQ-.js";import"./useControlledState-I_KBwW67.js";import"./useLocalizedStringFormatter-WF6y2aSl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cw_gJkmM.js";import"./useField-BrrjMWLY.js";import"./TextField.module-DdivwlC8.js";import"./search-Dh2nnHh2.js";import"./createLucideIcon-BtcOznK7.js";import"./x-B82Stdu9.js";import"./useLocalizedStringFormatter-CoQGZsFN.js";import"./Button-zPsJWo_p.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DD_4lyF0.js";import"./Collection-Cd6bQLAa.js";import"./index-C8zKGD88.js";import"./DragAndDrop-I_BfAN1B.js";import"./getScrollParent-2xlS7fKj.js";import"./scrollIntoView-NTyBe7BV.js";import"./SelectionIndicator-BD3Jo9O3.js";import"./SelectionManager-C1q1HFOS.js";import"./useEvent-Crt2nr6j.js";import"./useDescription-XOfwguuv.js";import"./inertValue-D4IHc4oi.js";import"./useHighlightSelectionDescription-9pwskkhD.js";import"./useUpdateEffect-BkLBp1-R.js";import"./ListKeyboardDelegate-B_UfOpVg.js";import"./useHasTabbableChild-Ckz6mj12.js";import"./Checkbox-CcIjHzw7.js";import"./check-DZeaiyU5.js";import"./useToggleState-Do2ssiVe.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
