import{r as m,f as l,j as t}from"./iframe-XiCiIf0n.js";import{S as d}from"./SearchField-CJ9dCtnz.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BxcTuX3f.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DN6l_A4f.js";import"./clsx-B-dksMZM.js";import"./Form-C0m5f7h4.js";import"./useFocusRing-Du04ckjJ.js";import"./index-5eW94gXQ.js";import"./index-DUzzqUE5.js";import"./Input-DJd9mlfc.js";import"./Hidden-B0NT9U_h.js";import"./Button-GBAKwEXf.js";import"./useLabel-CX8LzJ5q.js";import"./useLabels-yWB8_p4-.js";import"./useButton-DdGLHplO.js";import"./FieldError-BphdTUoK.js";import"./Text-BgntJj64.js";import"./clsx-Ciqy0D92.js";import"./Text-BB__0TpL.js";import"./RSPContexts-DA4QYsro.js";import"./Group-kVlQGyc6.js";import"./useControlledState-CUbneG8a.js";import"./useLocalizedStringFormatter-D4lkYHou.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-VxkvG0Xu.js";import"./useField-COsFSqdw.js";import"./TextField.module-DdivwlC8.js";import"./search-Qk8TfA0z.js";import"./createLucideIcon-Bi0GkdZT.js";import"./x-AkXMb_P6.js";import"./useLocalizedStringFormatter-COrKBGOW.js";import"./Button-34yPA4wA.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D8kosd8O.js";import"./Collection-BXkkuLNi.js";import"./index-ChQWbGkq.js";import"./DragAndDrop-DQb_6GR3.js";import"./getScrollParent-Bk9-lSDZ.js";import"./scrollIntoView-CPg7R5H1.js";import"./SelectionIndicator-zplcTWxq.js";import"./SelectionManager-DJe5Oihj.js";import"./useEvent-Byt7kt62.js";import"./useDescription-D3XmSikn.js";import"./inertValue-DEst55-O.js";import"./useHighlightSelectionDescription-Az0EcfF4.js";import"./useUpdateEffect-Dtfj_Yt8.js";import"./ListKeyboardDelegate-DwhOIuZ9.js";import"./useHasTabbableChild-DuXmXkw6.js";import"./Checkbox-BBTo2bZJ.js";import"./check-DFUg_1Yn.js";import"./useToggleState-CMN4XFli.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
