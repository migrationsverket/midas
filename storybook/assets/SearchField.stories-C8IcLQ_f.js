import{r as m,f as l,j as t}from"./iframe-CLvF6Z40.js";import{S as d}from"./SearchField-Cx83bUen.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DFeOP4E0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CJoHmjoo.js";import"./clsx-B-dksMZM.js";import"./Form-H5Vy5h3q.js";import"./useFocusRing-DA8pMfhu.js";import"./index-CaUd4TAW.js";import"./index-BMLC5BDm.js";import"./Input-CW2TDEkD.js";import"./Hidden-DDGoYcTF.js";import"./Button-IXlIqRd7.js";import"./useLabel-BdfOsCqj.js";import"./useLabels-BSmXnSL5.js";import"./useButton-Vz0P8804.js";import"./FieldError-VeyWLyeT.js";import"./Text-D9kACuMI.js";import"./clsx-Ciqy0D92.js";import"./Text-DSAnxviu.js";import"./RSPContexts-CTL5xx9Q.js";import"./Group-CF1mdGZd.js";import"./useControlledState-aZqY8xT5.js";import"./useLocalizedStringFormatter-CKVgiq-J.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D5r6PF3z.js";import"./useField-BiXCEzZa.js";import"./TextField.module-DdivwlC8.js";import"./search-Brk4r-By.js";import"./createLucideIcon-BkSuVCZc.js";import"./x-DROlonvj.js";import"./useLocalizedStringFormatter-gIilFwjy.js";import"./Button-CVKy4fAF.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Ckm5OILG.js";import"./Collection-CsSqZXfS.js";import"./index-BFpG02G3.js";import"./DragAndDrop-BHaI81oS.js";import"./getScrollParent-CPZW7HPG.js";import"./scrollIntoView-D0r91Cjt.js";import"./SelectionIndicator-CaRCxqEQ.js";import"./SelectionManager-B6jt3tF-.js";import"./useEvent-DVQ3dgzr.js";import"./useDescription-Ctzm8kKf.js";import"./inertValue-DicoPSTT.js";import"./useHighlightSelectionDescription-DwIJzpWD.js";import"./useUpdateEffect-CuWoIipA.js";import"./ListKeyboardDelegate-DkyBJYE4.js";import"./useHasTabbableChild-DeFAWjc3.js";import"./Checkbox-CuiTZfz4.js";import"./check-whg681CN.js";import"./useToggleState-yDEujSJw.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
