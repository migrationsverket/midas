import{r as m,f as l,j as t}from"./iframe-fyvob5pV.js";import{S as d}from"./SearchField-DDhWvsTU.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BZLPxS7H.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-3Trks7iT.js";import"./utils-ZHg57NPT.js";import"./useLocalizedStringFormatter-C-nDJOl1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DqAaCvYO.js";import"./useFocusRing-CefW_QDX.js";import"./index-DeYDX39H.js";import"./index-YdXWAPci.js";import"./useFormValidation-DqszraAo.js";import"./useField-2PAzhLbD.js";import"./Button-Cg4ndPMc.js";import"./Hidden-BUh53Qty.js";import"./useLabels-De8j202R.js";import"./useButton-BWNkf0-B.js";import"./search-CK3tHNtU.js";import"./createLucideIcon-nzmbSsyS.js";import"./ClearButton-D9Hymj5z.js";import"./Button-CyxqdNO0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CN8LIDfv.js";import"./VisuallyHidden-B4V5xJ__.js";import"./x-vbaUtfu9.js";import"./FieldError-_70I33O6.js";import"./Text-DgXAg_jZ.js";import"./Text-DkAg-CHN.js";import"./RSPContexts-CFyQYNsz.js";import"./Collection-B71LPDM_.js";import"./index-Y2Or3rvv.js";import"./DragAndDrop-Cy_4TG21.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DjORemxc.js";import"./SelectionManager-CeD3aTpx.js";import"./useEvent-JeGL7mSw.js";import"./useDescription-BEPPLOWX.js";import"./inertValue-DDkv9Nlm.js";import"./useHighlightSelectionDescription-DMad3nqx.js";import"./useUpdateEffect-B4j_50oq.js";import"./ListKeyboardDelegate-CNox7fi5.js";import"./useHasTabbableChild-Bp4BEJL0.js";import"./Checkbox-BiSOUY7r.js";import"./Form-x2mvhheS.js";import"./check-DFjD-V8B.js";import"./useToggleState-DGUFLm2x.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
