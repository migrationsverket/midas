import{r as m,f as l,j as t}from"./iframe-yW9ZA3bb.js";import{S as d}from"./SearchField-CF9F0_Vm.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BbfEr5Z2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BUJhr-Te.js";import"./clsx-B-dksMZM.js";import"./Form-Dyi7ByEU.js";import"./useFocusRing-Bwgr8eO9.js";import"./index-BH1NNJD9.js";import"./index-XMJgY8GA.js";import"./Input-aTb6VFZD.js";import"./Hidden-zw4kT8e2.js";import"./Button-Dz51wr3r.js";import"./useLabel-BCJoncEW.js";import"./useLabels-CW7YtnuA.js";import"./useButton-Cr-TXgCI.js";import"./FieldError-CaZE3eKK.js";import"./Text-Cihq6LYV.js";import"./clsx-Ciqy0D92.js";import"./Text-DMsq_JIv.js";import"./RSPContexts-ESkvyycf.js";import"./Group-DSLIBANt.js";import"./useControlledState-YFMNQnxY.js";import"./useLocalizedStringFormatter-sAga3kqn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BPKUsTxO.js";import"./useField-DB6t2HH5.js";import"./TextField.module-DdivwlC8.js";import"./search-DNED2u_n.js";import"./createLucideIcon-Dzjc7ziG.js";import"./x-DnrjJHU3.js";import"./useLocalizedStringFormatter-bv3drFF0.js";import"./Button-CVdu7ubL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BLpKIy7O.js";import"./Collection-Bw0lf7NA.js";import"./index-rTiiKE-t.js";import"./DragAndDrop-ANfjVQd4.js";import"./getScrollParent-ByY90j8k.js";import"./scrollIntoView-DxGdu0tm.js";import"./SelectionIndicator-DU1EMdvh.js";import"./SelectionManager-BxnG2-K_.js";import"./useEvent-7NkuCPOG.js";import"./useDescription-Cw85_cIo.js";import"./inertValue-u315Jshf.js";import"./useHighlightSelectionDescription-B1Oclkdo.js";import"./useUpdateEffect-20AShWAd.js";import"./ListKeyboardDelegate-HzIwCYcA.js";import"./useHasTabbableChild-Dca0MITO.js";import"./Checkbox-CqVwedsa.js";import"./check-Byrhfxjk.js";import"./useToggleState-BAV0XQKa.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
