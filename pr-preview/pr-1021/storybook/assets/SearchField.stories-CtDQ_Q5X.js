import{r as m,f as l,j as t}from"./iframe-aMoIVDeR.js";import{S as d}from"./SearchField-C3KK-gm5.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dfel2x0w.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CJ6hso62.js";import"./utils-CFxRfzzc.js";import"./useLocalizedStringFormatter-A5HFr0Ya.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-o81z82YN.js";import"./useFocusRing-DlrmdZPs.js";import"./index-DBBzqi9Z.js";import"./index-srgIOSWI.js";import"./useFormValidation-BsUJefcp.js";import"./useField-OOJAedGL.js";import"./Button-DiQ7-ULm.js";import"./Hidden-B6fG37sh.js";import"./useLabels-akov2npX.js";import"./useButton-CkIEgbAm.js";import"./search-DTBk4qPI.js";import"./createLucideIcon-Bt3zLjO1.js";import"./ClearButton-CxpekBX5.js";import"./Button-CD86P0d9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-L8R7Fq.js";import"./VisuallyHidden-DdIi_TPZ.js";import"./x-7JaraCCs.js";import"./FieldError-D2QhEaby.js";import"./Text-p3-kB6K4.js";import"./Text-BbmTTQ6z.js";import"./RSPContexts-CsPbAcKW.js";import"./Collection-BRRSJjSx.js";import"./index-B-dZTbiu.js";import"./DragAndDrop-BVfAVMMt.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ZXABDpq1.js";import"./SelectionManager-DfJKODKa.js";import"./useEvent-C22glenQ.js";import"./useDescription-DuoNJ0JY.js";import"./inertValue-IthZYYUB.js";import"./useHighlightSelectionDescription-BtUuJT29.js";import"./useUpdateEffect-BbQ-jpPv.js";import"./ListKeyboardDelegate-t-hrFPYX.js";import"./useHasTabbableChild-Cq4bzFAl.js";import"./Checkbox-kR-iWFxN.js";import"./Form-vpgZxQyd.js";import"./check-DMb1vxPn.js";import"./useToggleState-2XUYBxOG.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
