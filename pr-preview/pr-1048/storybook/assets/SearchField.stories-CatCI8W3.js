import{r as m,f as l,j as t}from"./iframe-B46k8Jp-.js";import{S as d}from"./SearchField-mqUNUsSj.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BPTWjC9R.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BtITM9-4.js";import"./utils-D8o13i-0.js";import"./useLocalizedStringFormatter-DswGCIZV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BNnhM8Yn.js";import"./useFocusRing-DkIdhDSx.js";import"./index-BNL-dXtG.js";import"./index-D8Bk77PH.js";import"./useFormValidation-Bno76pJS.js";import"./useField-CXG2aLYx.js";import"./Button-DeinXWVf.js";import"./Hidden-CFqGg0VD.js";import"./number-DfkVkf0F.js";import"./useLabels-DW9kmzSX.js";import"./useButton-B5s3hE2o.js";import"./search-CWDp3Iwc.js";import"./createLucideIcon-FljtlaXo.js";import"./ClearButton-DKASjdVC.js";import"./Button-CPDizGhA.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D_eLZdxP.js";import"./VisuallyHidden-Bnc_oVlh.js";import"./x-BMIcm1JC.js";import"./FieldError-VsuqZb_G.js";import"./Text-BkyBG04s.js";import"./Text-BjNkUFcW.js";import"./RSPContexts-BmEJNEMw.js";import"./Collection-CssY9qLp.js";import"./index-l8QBXIuE.js";import"./DragAndDrop-C3q9ZUHC.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BgTrKU_H.js";import"./SelectionManager-VtK9-ztp.js";import"./useEvent-BacgC5LG.js";import"./useDescription-BoBzwRVp.js";import"./inertValue-CRMIx_A5.js";import"./useHighlightSelectionDescription--KoarGR7.js";import"./useUpdateEffect-BOpkoIqE.js";import"./ListKeyboardDelegate-DGcjUW6o.js";import"./useHasTabbableChild-CRkcbCH_.js";import"./Checkbox-DjUEQ4wy.js";import"./Form-k6tpHfuL.js";import"./check-tl7BUE2a.js";import"./useToggleState-5TtqvLKL.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
