import{r as m,f as l,j as t}from"./iframe-DLQn-qTm.js";import{S as d}from"./SearchField-BM2h5q0s.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-MCPm4KGb.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BZ3KbGsu.js";import"./utils-BseBzJWz.js";import"./useLocalizedStringFormatter-BJIt3lYB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CFtEHhuy.js";import"./useFocusRing-Do74QKH1.js";import"./index-BkZE1OTB.js";import"./index-C8Zl_Tv7.js";import"./useFormValidation--qOyb23-.js";import"./useField-BOmmNrOA.js";import"./Button-DYd3H_n-.js";import"./Hidden-CNhpunQg.js";import"./useLabels-DyMy7daN.js";import"./useButton-C2eCHCKv.js";import"./search-C7ze-4M1.js";import"./createLucideIcon-Dlil2oPf.js";import"./ClearButton-Ch9984kl.js";import"./Button-ChhODU99.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CJPUWmDD.js";import"./VisuallyHidden--4vyVQ1_.js";import"./x-BhU4g9X0.js";import"./FieldError-DhgEtkJ4.js";import"./Text-CuFotw1d.js";import"./Text-CjwNLSIP.js";import"./RSPContexts-DvPIEXFn.js";import"./Collection-Bw773ohV.js";import"./index-B9SqyPko.js";import"./DragAndDrop-CTv02pIm.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C3jZ9U8m.js";import"./SelectionManager-p-9hdccP.js";import"./useEvent-dNq17Ah7.js";import"./useDescription-Cc6Zbq_g.js";import"./inertValue-B6Ia-IGD.js";import"./useHighlightSelectionDescription-Bh19s6aI.js";import"./useUpdateEffect-CXe3h0lM.js";import"./ListKeyboardDelegate-Czj8i91Y.js";import"./useHasTabbableChild-NJ4O6WLK.js";import"./Checkbox-OEkjjwjQ.js";import"./Form-FnL5AQKn.js";import"./check-CDl5l8qX.js";import"./useToggleState-BoongdFE.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
