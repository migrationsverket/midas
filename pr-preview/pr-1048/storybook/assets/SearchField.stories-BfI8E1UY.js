import{r as m,f as l,j as t}from"./iframe-Bd3o2-kp.js";import{S as d}from"./SearchField-I6-KWUO1.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DgIZiDzV.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CKr9JfDg.js";import"./utils-_rYlTRGE.js";import"./useLocalizedStringFormatter-CZQf7unD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D_JBWAYK.js";import"./useFocusRing-_t-XzKAc.js";import"./index-DDX6x1th.js";import"./index-eLVcURWN.js";import"./useFormValidation-D42WgsGp.js";import"./useField-j4rDUBO_.js";import"./Button-OB4vCyak.js";import"./Hidden-I4t1GTdG.js";import"./useLabels-8gAUbgWu.js";import"./useButton-ckXfTI1r.js";import"./search-T4d5Vy3p.js";import"./createLucideIcon-CqPIwQix.js";import"./ClearButton-VvR6dY7f.js";import"./Button-BQ7itNQZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CuqGYsZF.js";import"./VisuallyHidden-B2vIweuU.js";import"./x-DMWTYIyv.js";import"./FieldError-uVOJT8DA.js";import"./Text-Cavz3YgX.js";import"./Text-CXquw0of.js";import"./RSPContexts-DXI9Wvdb.js";import"./Collection-C2tgBbeu.js";import"./index-DTQumf_p.js";import"./DragAndDrop-CGzxA_CB.js";import"./getScrollParent-x0CFFfYB.js";import"./scrollIntoView-D_3VunV_.js";import"./SelectionIndicator-zc7AeVqB.js";import"./SelectionManager-D2-mM9qw.js";import"./useEvent-DfAY0KtM.js";import"./useDescription-Bwebj_p1.js";import"./inertValue-8PcIxtIC.js";import"./useHighlightSelectionDescription-Be8WtANB.js";import"./useUpdateEffect-CO3MOz-3.js";import"./ListKeyboardDelegate-CbnzhNFi.js";import"./useHasTabbableChild-CTZ1MBFE.js";import"./Checkbox-empnHDOC.js";import"./Form-DMlpINIC.js";import"./check-C7inItIg.js";import"./useToggleState-DO0seavX.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
