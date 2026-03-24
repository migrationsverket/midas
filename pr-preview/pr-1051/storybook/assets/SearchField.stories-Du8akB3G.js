import{r as m,f as l,j as t}from"./iframe-CuGoBoGQ.js";import{S as d}from"./SearchField-DuIYkKwL.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DBhxPr4G.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-RwFFfgQr.js";import"./clsx-B-dksMZM.js";import"./Form-gAbWA84B.js";import"./useFocusRing-7bYJ39Cr.js";import"./index-BccAwutK.js";import"./index-Bov1f0DO.js";import"./Input-C5zvbX-S.js";import"./Hidden-DY115Oyb.js";import"./Button-IcW5J6Fh.js";import"./useLabels-BByCvXff.js";import"./useButton-CJN9PhJp.js";import"./FieldError-CnIE1vat.js";import"./Text-CH2OEfXa.js";import"./clsx-Ciqy0D92.js";import"./Text-CKD5St-o.js";import"./RSPContexts-CvhTtm28.js";import"./Group-CDYSY5JO.js";import"./useControlledState-SyqHFLy3.js";import"./useLocalizedStringFormatter-BG2zkY5m.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ZIbstcVT.js";import"./useField-CTDbBYF-.js";import"./TextField.module-DdivwlC8.js";import"./search-DzpjUcoY.js";import"./createLucideIcon-COJKu3Gj.js";import"./x-uQRabDRs.js";import"./useLocalizedStringFormatter-Xr2nB7Pj.js";import"./Button-hgAtNtsw.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-PGxXka93.js";import"./Collection-5hILMCKy.js";import"./index-i8iJAVkf.js";import"./DragAndDrop-XHuLc-Fx.js";import"./getScrollParent-Dk_EDX2n.js";import"./scrollIntoView-CMecGSk7.js";import"./SelectionIndicator-LdUPpWCw.js";import"./SelectionManager-CpxIph4V.js";import"./useEvent-CK9pGwso.js";import"./useDescription-DnBOZ_LL.js";import"./inertValue-CvQOc_Se.js";import"./useHighlightSelectionDescription-ClyNJLky.js";import"./useUpdateEffect-DbKMRg_S.js";import"./ListKeyboardDelegate-DRfFRZtF.js";import"./useHasTabbableChild-CZ3SyAL9.js";import"./Checkbox-BtL0iiiD.js";import"./check-BIF7CUk3.js";import"./useToggleState-yLCWAFRO.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
