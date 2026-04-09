import{r as m,f as l,j as t}from"./iframe-CFC4xcGk.js";import{S as d}from"./SearchField-DSxk-cQ9.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-YTQQKGLx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-YAjyJ6o5.js";import"./clsx-B-dksMZM.js";import"./Form-DaGSyuCS.js";import"./useFocusRing-jXz3NGbj.js";import"./index-BxLA2RHQ.js";import"./index-CMa239of.js";import"./Input-CS-EbzmE.js";import"./Hidden-BvfitbEd.js";import"./Button-Dlhy25YO.js";import"./useLabel-BN4J_loo.js";import"./useLabels-D-PAbcSB.js";import"./useButton-DvjQ4vDc.js";import"./FieldError-DPjUPYFy.js";import"./Text-AmqWzkOV.js";import"./clsx-Ciqy0D92.js";import"./Text-ZUooKx_2.js";import"./RSPContexts-BaTuXADK.js";import"./Group-Dcazqvxq.js";import"./useControlledState-CPr8PZqM.js";import"./useLocalizedStringFormatter-dA5DnFaT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B7hc4cSc.js";import"./useField-UMG9k_p-.js";import"./TextField.module-DdivwlC8.js";import"./search-DksAiO63.js";import"./createLucideIcon-BfFQGVhS.js";import"./x-BlcNnfbx.js";import"./useLocalizedStringFormatter-BYPhK6jM.js";import"./Button-DmKKfG5W.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BPhSZleF.js";import"./Collection-Usc2d9zU.js";import"./index-3mOn_vPA.js";import"./DragAndDrop-xJfzPPRd.js";import"./getScrollParent-v4OBvkmq.js";import"./scrollIntoView-CKdxk-E0.js";import"./SelectionIndicator-DeAU8qDC.js";import"./SelectionManager-CAmHqMfl.js";import"./useEvent-BUJ9aQ4c.js";import"./useDescription-BsBgpIxP.js";import"./inertValue-B5swbnWp.js";import"./useHighlightSelectionDescription-CatOTrgf.js";import"./useUpdateEffect-DxVR2Bwn.js";import"./ListKeyboardDelegate-BO04bF22.js";import"./useHasTabbableChild-DBr99lHa.js";import"./Checkbox-Cy0nPndC.js";import"./check-CxhYpS8G.js";import"./useToggleState-BlBTFW8l.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
