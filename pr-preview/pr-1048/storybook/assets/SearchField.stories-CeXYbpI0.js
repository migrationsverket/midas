import{r as m,f as l,j as t}from"./iframe-C3suvfCC.js";import{S as d}from"./SearchField-CAVZXE1S.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D5MPKdQF.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dy1nnS07.js";import"./utils-8KtKGWo2.js";import"./useLocalizedStringFormatter-BhJ_7gEa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-SIPUAUV3.js";import"./useFocusRing-DPPVEX-G.js";import"./index-DPEO0aoj.js";import"./index-PxyQfFNQ.js";import"./useFormValidation-D3u9G5Gr.js";import"./useField-DCRcz9cn.js";import"./Button-Dadovnzr.js";import"./Hidden-B4jqCieW.js";import"./number-DfkVkf0F.js";import"./useLabels-ETQjh8K0.js";import"./useButton-D1gxBCXz.js";import"./search-CCZaKiwA.js";import"./createLucideIcon-lIWmNTi7.js";import"./ClearButton-CAfYqT4n.js";import"./Button-BugZSa53.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B21-jb3s.js";import"./VisuallyHidden-BuDGIcKc.js";import"./x-Z98Hm-Qw.js";import"./FieldError-r_7UR8Ic.js";import"./Text-TmrZTkdZ.js";import"./Text-CAR9w4j8.js";import"./RSPContexts-D9aNL0uK.js";import"./Collection-CQ04hqGX.js";import"./index-R_sykBLn.js";import"./DragAndDrop-CIaLUjcZ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-3UAsTNPC.js";import"./SelectionManager-sa4l8pM_.js";import"./useEvent-C45D4JfQ.js";import"./useDescription-Dzu4Oy5P.js";import"./inertValue-DdnXXh8S.js";import"./useHighlightSelectionDescription-Cg167jHJ.js";import"./useUpdateEffect-D3I_akV7.js";import"./ListKeyboardDelegate-8ZhAfhP0.js";import"./useHasTabbableChild-DzyrEw0f.js";import"./Checkbox-i3lDb0Ip.js";import"./Form-Bl2LrB3d.js";import"./check-DCe7pga7.js";import"./useToggleState-Bva72Ife.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
