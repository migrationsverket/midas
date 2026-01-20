import{r as m,f as l,j as t}from"./iframe-foa1fz1L.js";import{S as d}from"./SearchField-CgIiLGbk.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C3z-pJNg.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dvg4iFOf.js";import"./utils-Ev5LGgue.js";import"./useLocalizedStringFormatter-BRt717ju.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BM9G_UwF.js";import"./useFocusRing-Ablbfaap.js";import"./index-Cn_e8zWb.js";import"./index-BoAX5djW.js";import"./useFormValidation-kLEwtEdL.js";import"./useField-Cu3mWKaX.js";import"./Button-BDE-HjlG.js";import"./Hidden-C56sCU1_.js";import"./useLabels-DzekMX3n.js";import"./useButton-D8CDSc--.js";import"./search-Pojb_AXM.js";import"./createLucideIcon-DPqkobhw.js";import"./ClearButton-rtrgtiKL.js";import"./Button-DRHKUhef.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CRm2vV7S.js";import"./VisuallyHidden-Crc1dHu9.js";import"./x-jUsDefJP.js";import"./FieldError-0xt68GMY.js";import"./Text-hfmE0wsb.js";import"./Text-3kKEReu_.js";import"./RSPContexts-CaEO68sI.js";import"./Collection-CT8zCrZF.js";import"./index-uIVRUAny.js";import"./DragAndDrop-DU_4vxRM.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-G21kOOwW.js";import"./SelectionManager-CsvPKqJc.js";import"./useEvent-C-hGFFqh.js";import"./useDescription-DBUGuybl.js";import"./inertValue-BmBrj8Yc.js";import"./useHighlightSelectionDescription-hWWMsLnL.js";import"./useUpdateEffect-DJKerTt0.js";import"./ListKeyboardDelegate-d_TXzJQo.js";import"./useHasTabbableChild-DL9gv9AO.js";import"./Checkbox-CzNhvZga.js";import"./Form-DMmoH39G.js";import"./check-C3DVOOTq.js";import"./useToggleState-DOIqEdTT.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
