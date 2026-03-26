import{r as m,f as l,j as t}from"./iframe-SDpi4twy.js";import{S as d}from"./SearchField-CVyoRxYK.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Bj60jPsw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-xrvn9yoP.js";import"./clsx-B-dksMZM.js";import"./Form-BPlMq8bY.js";import"./useFocusRing-HN10idpk.js";import"./index-DtGjaFFO.js";import"./index-BiFAAEUl.js";import"./Input-DDZMmrbv.js";import"./Hidden-DCBLchC2.js";import"./Button-CP9rYMdO.js";import"./useLabel-CsVesTp2.js";import"./useLabels-BdN3-T9J.js";import"./useButton-da7p-KW-.js";import"./FieldError-BAYSeF7s.js";import"./Text-DfMMI2V7.js";import"./clsx-Ciqy0D92.js";import"./Text-fYO5A3M_.js";import"./RSPContexts-6ABDZ8a3.js";import"./Group-Bbkpko_-.js";import"./useControlledState-DnKNiq_e.js";import"./useLocalizedStringFormatter-BT0fez2i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ljxkt21P.js";import"./useField-D_PusGes.js";import"./TextField.module-DdivwlC8.js";import"./search-hpQIrjc6.js";import"./createLucideIcon-CoSUjgph.js";import"./x-BpKlbFNN.js";import"./useLocalizedStringFormatter-DAhT7gg2.js";import"./Button-BFfXUBEp.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DDECxo00.js";import"./Collection-DM9qDYt9.js";import"./index-utwbMdGP.js";import"./DragAndDrop-ClJciqMd.js";import"./getScrollParent-CwCM-QuG.js";import"./scrollIntoView-BoxRYZNv.js";import"./SelectionIndicator-D6_dtQfE.js";import"./SelectionManager-DRPxsEbu.js";import"./useEvent-Du0U3mMG.js";import"./useDescription-CU7-IrDB.js";import"./inertValue-BLq5Qy8v.js";import"./useHighlightSelectionDescription-Cx5zwbNH.js";import"./useUpdateEffect-B-kuX5E4.js";import"./ListKeyboardDelegate-33IGFvKv.js";import"./useHasTabbableChild-D2h7HuaU.js";import"./Checkbox-DAiNvjnT.js";import"./check-DBHwUjZj.js";import"./useToggleState-BE7HndZe.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
