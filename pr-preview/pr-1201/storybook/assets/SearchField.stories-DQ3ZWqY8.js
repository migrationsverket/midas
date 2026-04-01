import{r as m,f as l,j as t}from"./iframe-BcVWnjiq.js";import{S as d}from"./SearchField-TFsCZC8U.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-NCwhB8u_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BHfrMThS.js";import"./clsx-B-dksMZM.js";import"./Form-Bki39RKU.js";import"./useFocusRing-Cr43T2xz.js";import"./index-Bf6BaTQp.js";import"./index-lTGn0qSi.js";import"./Input-DeQXhFoY.js";import"./Hidden-B1e2ot4t.js";import"./Button-X_O9ad-3.js";import"./useLabel-CdT-X_Un.js";import"./useLabels-H_5_YSkD.js";import"./useButton-CJEr5rsL.js";import"./FieldError-RgIIuEHk.js";import"./Text-Cf3_Dpr9.js";import"./clsx-Ciqy0D92.js";import"./Text-aEiNTvlh.js";import"./RSPContexts-DwUzfd_N.js";import"./Group-DnSo1KJl.js";import"./useControlledState-BeIEKiqF.js";import"./useLocalizedStringFormatter-BzQp9VXy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-WgrE_jSW.js";import"./useField-Dhrmud0j.js";import"./TextField.module-DdivwlC8.js";import"./search-7jdoct7Q.js";import"./createLucideIcon-DKRKL4qZ.js";import"./x-B_mInUxe.js";import"./useLocalizedStringFormatter-BGPexIt5.js";import"./Button-aD9_wGcx.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DQYzeIJf.js";import"./Collection-BGh5CUSO.js";import"./index-DAeJWrLP.js";import"./DragAndDrop-DLJ6xBma.js";import"./getScrollParent-dSYNY5k0.js";import"./scrollIntoView-CeKJisls.js";import"./SelectionIndicator-BxX3y6YC.js";import"./SelectionManager-y-xBPN-9.js";import"./useEvent-CtZW5Qvu.js";import"./useDescription-cF75q-Hq.js";import"./inertValue-03XHyI7T.js";import"./useHighlightSelectionDescription-Dk6TqolI.js";import"./useUpdateEffect-DEIDvvml.js";import"./ListKeyboardDelegate-C98MwhU0.js";import"./useHasTabbableChild-oEFiu3Bm.js";import"./Checkbox-7TaD0QSp.js";import"./check-CsvvCU4m.js";import"./useToggleState-xvRUJtpF.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
