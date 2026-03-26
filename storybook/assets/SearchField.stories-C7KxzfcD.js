import{r as m,f as l,j as t}from"./iframe-CRmifMxk.js";import{S as d}from"./SearchField-jgGQQifc.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-dqzCieGR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dhemezbc.js";import"./clsx-B-dksMZM.js";import"./Form-BdfTmg9K.js";import"./useFocusRing-C63zC52P.js";import"./index-DsJY3sZz.js";import"./index-C2oL4zj2.js";import"./Input-PRe3Ij8l.js";import"./Hidden-D_jN673M.js";import"./Button-Xq9T9zNn.js";import"./useLabel-CMUsO_ec.js";import"./useLabels-DRk006Lw.js";import"./useButton-BpHW9Z05.js";import"./FieldError-4mX3m-58.js";import"./Text-7kJBKZyv.js";import"./clsx-Ciqy0D92.js";import"./Text-Cw5AWujN.js";import"./RSPContexts-Ch-opsTz.js";import"./Group-BEi-QEnV.js";import"./useControlledState-DeYyUgKl.js";import"./useLocalizedStringFormatter-D-hwM5Wx.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CQSHC6Ee.js";import"./useField-CAyp5oSJ.js";import"./TextField.module-DdivwlC8.js";import"./search-ARO-LRpr.js";import"./createLucideIcon-DkATSQ6x.js";import"./x-COiF7Ld4.js";import"./useLocalizedStringFormatter-CHY6Cxq_.js";import"./Button-C1SdrETN.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C9jbNlKJ.js";import"./Collection-BhxLxQcu.js";import"./index-DwLMWdc1.js";import"./DragAndDrop-CkfYJqWE.js";import"./getScrollParent-DxnI4PpA.js";import"./scrollIntoView-D0gLy9uc.js";import"./SelectionIndicator-kZ0Ry9SW.js";import"./SelectionManager-DztN3z26.js";import"./useEvent-CCz8s320.js";import"./useDescription-Tao1j2gm.js";import"./inertValue-C1c6uZ_B.js";import"./useHighlightSelectionDescription-B5S1OM2H.js";import"./useUpdateEffect-C24Fq-cB.js";import"./ListKeyboardDelegate-BPJcXB6C.js";import"./useHasTabbableChild-0dlPfDDa.js";import"./Checkbox-B4ZmW57T.js";import"./check-PWESK8WL.js";import"./useToggleState-DdZ2lj-a.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
