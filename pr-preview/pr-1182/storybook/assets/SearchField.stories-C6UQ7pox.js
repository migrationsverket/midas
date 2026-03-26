import{r as m,f as l,j as t}from"./iframe-BfMhQjGU.js";import{S as d}from"./SearchField-CiRy5F3X.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DMbQZm8b.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DaDNkmjx.js";import"./clsx-B-dksMZM.js";import"./Form-BqegSd4k.js";import"./useFocusRing-C5Yjq8eB.js";import"./index-CANV50_Z.js";import"./index-DcgLR03X.js";import"./Input-DUztjJHc.js";import"./Hidden-DhDQuc5B.js";import"./Button-9bk196xZ.js";import"./useLabel-DV2YbXB7.js";import"./useLabels-DmE0eIr6.js";import"./useButton-CVkS8nd6.js";import"./FieldError-xqjiIrlm.js";import"./Text-9jZvM0HP.js";import"./clsx-Ciqy0D92.js";import"./Text--boW3P5m.js";import"./RSPContexts-BaQPI9Wj.js";import"./Group-Bv4HrTCM.js";import"./useControlledState-DswV1VSh.js";import"./useLocalizedStringFormatter-qWRJ97i-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DuPz2ck0.js";import"./useField-B97SdsPB.js";import"./TextField.module-DdivwlC8.js";import"./search-CpNNaqg1.js";import"./createLucideIcon-DSNzZSu6.js";import"./x-CGIghyVu.js";import"./useLocalizedStringFormatter-7a6_xXLI.js";import"./Button-blC6kfyz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CrEXwPZJ.js";import"./Collection-DYsPSnsY.js";import"./index-Bh5h3w6e.js";import"./DragAndDrop-CILk7Xb1.js";import"./getScrollParent-D97Sq6rj.js";import"./scrollIntoView-ffGKw_mR.js";import"./SelectionIndicator-I0ZLZ8XL.js";import"./SelectionManager-Gp2zBd9X.js";import"./useEvent-C5eanDI0.js";import"./useDescription-DLgHt4Bt.js";import"./inertValue-BP718zcX.js";import"./useHighlightSelectionDescription-kb8ljNfQ.js";import"./useUpdateEffect-CzwHi36Q.js";import"./ListKeyboardDelegate-DDGYt9ze.js";import"./useHasTabbableChild-DOwqKSYU.js";import"./Checkbox-D43XtY2i.js";import"./check-RR3EPQ5X.js";import"./useToggleState-gWE921FC.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
