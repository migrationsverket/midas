import{r as m,f as l,j as t}from"./iframe-CO-gAPhX.js";import{S as d}from"./SearchField-DGY2FdDm.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-2FZJZkTq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-k2fUJOcg.js";import"./clsx-B-dksMZM.js";import"./Form-BjE-JURH.js";import"./useFocusRing-BUNiQTJz.js";import"./index-DMx7-GyY.js";import"./index-CwA1oRHE.js";import"./Input-B5Jua51h.js";import"./Hidden-BYpeRQWv.js";import"./Button-DXT5LjXI.js";import"./useLabel-CFHzh0vI.js";import"./useLabels-BDaY_wZ1.js";import"./useButton-M9CtI4R_.js";import"./FieldError-BaYlcMBl.js";import"./Text-dYy03QVX.js";import"./clsx-Ciqy0D92.js";import"./Text-B90d5phV.js";import"./RSPContexts-Bk8niJAv.js";import"./Group-CnsmZZ9G.js";import"./useControlledState-DiHS_28D.js";import"./useLocalizedStringFormatter-Ckla6k3E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CzbKYk1w.js";import"./useField-CIOLxdqj.js";import"./TextField.module-DdivwlC8.js";import"./search-B-3e7bux.js";import"./createLucideIcon-BnizQjgj.js";import"./x-q4leZoPv.js";import"./useLocalizedStringFormatter-CP5Hjs4T.js";import"./Button-CYSOGzux.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CKCCpPT0.js";import"./Collection-D-oT_f_B.js";import"./index-Cieal__4.js";import"./DragAndDrop-6VuYJuly.js";import"./getScrollParent-Byv4kQvn.js";import"./scrollIntoView-D1OpogIN.js";import"./SelectionIndicator-DJatY3dn.js";import"./SelectionManager-9bBdihZR.js";import"./useEvent-VKhVlozG.js";import"./useDescription-tJJWr6K2.js";import"./inertValue-RgJdbm7J.js";import"./useHighlightSelectionDescription-BmKwtLk6.js";import"./useUpdateEffect-YSJS4hxp.js";import"./ListKeyboardDelegate-CcIl3WSR.js";import"./useHasTabbableChild-Cnl4x3As.js";import"./Checkbox-CHDA_jzu.js";import"./check-mu8RkVJw.js";import"./useToggleState-BKhhzqXY.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
