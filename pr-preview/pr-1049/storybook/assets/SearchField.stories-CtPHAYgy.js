import{r as m,f as l,j as t}from"./iframe-ZU-VlsmC.js";import{S as d}from"./SearchField-COQdUJYl.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B9khZE28.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CLKMAA4K.js";import"./utils-CwYPazgz.js";import"./useLocalizedStringFormatter-DKJg5-Yp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DeLDtA3g.js";import"./useFocusRing-DeDg3Wm1.js";import"./index-BJjzhiid.js";import"./index-B-c5mNFM.js";import"./useFormValidation-MYNTqaJp.js";import"./useField-C3-0p5Cj.js";import"./Button-CeMV39iZ.js";import"./Hidden-DuFt3Wpn.js";import"./useLabels-t8k_Uoah.js";import"./useButton-C2Rk3x3w.js";import"./search-DRIxwpzB.js";import"./createLucideIcon-zhU_S5bE.js";import"./ClearButton-DFqx-00x.js";import"./Button-CkFCptv_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-9gOm9LYJ.js";import"./VisuallyHidden-CGc8iUr3.js";import"./x-CyPK6XsU.js";import"./FieldError-CW123qup.js";import"./Text-Bk-OwW6a.js";import"./Text-Der4VdMW.js";import"./RSPContexts-yZiAzvBR.js";import"./Collection-D5K1FB_c.js";import"./index-DYvT57Od.js";import"./DragAndDrop-dgyWqajl.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DpQVp4iw.js";import"./SelectionManager-FtklnvhE.js";import"./useEvent-TDbxnCp3.js";import"./useDescription-aAdr_LiL.js";import"./inertValue-Bgm57cDU.js";import"./useHighlightSelectionDescription-DoVWwiG5.js";import"./useUpdateEffect-9hmtaLtn.js";import"./ListKeyboardDelegate-BbodKWK9.js";import"./useHasTabbableChild-YcUivZ0M.js";import"./Checkbox-E0YJuDgl.js";import"./Form-DjYb9RJ8.js";import"./check-HATkEPam.js";import"./useToggleState-DBmlZS4J.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
