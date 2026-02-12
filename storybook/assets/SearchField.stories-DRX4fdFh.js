import{r as m,f as l,j as t}from"./iframe-B9EGKC1A.js";import{S as d}from"./SearchField-CpHXUTjn.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-eGAhoLa0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DY41YncH.js";import"./utils-DzN8UgTA.js";import"./useLocalizedStringFormatter-CMmHX6mL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Xv7KN3AS.js";import"./useFocusRing-CQ5RM59H.js";import"./index--DS5PC0t.js";import"./index-DJ0aAN4x.js";import"./useFormValidation-DfmYSHhC.js";import"./useField-DD9fVkS4.js";import"./Button-DlLSg3Nk.js";import"./Hidden-wAD8NsRv.js";import"./useLabels-Bl3P75C2.js";import"./useButton-emt7P429.js";import"./search-DuRKs3Qq.js";import"./createLucideIcon-DF7Nxj94.js";import"./ClearButton-sIB4P6xc.js";import"./Button-DTp360Zp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CvJyQgQK.js";import"./VisuallyHidden-CFcEMtwF.js";import"./x-DnPGMz9F.js";import"./FieldError-Cbj94XFe.js";import"./Text-BE5AMrY4.js";import"./Text-BfUKDAVE.js";import"./RSPContexts-CVSZKZ30.js";import"./Collection-CdGAXvsM.js";import"./index-DQX0hg3j.js";import"./DragAndDrop-K39Y7qA3.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Cjj8eMzJ.js";import"./SelectionManager-_FsQAwD6.js";import"./useEvent-a78rAipB.js";import"./useDescription-CEdPnwlS.js";import"./inertValue-F0xrUJ7N.js";import"./useHighlightSelectionDescription-BZUAreVU.js";import"./useUpdateEffect-eRfQtyWK.js";import"./ListKeyboardDelegate-HX38iJDY.js";import"./useHasTabbableChild-CXP5PvSe.js";import"./Checkbox-D-GD3vv4.js";import"./Form-C4Dl3S4i.js";import"./check-BaWTzUqT.js";import"./useToggleState-90ObTsoB.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
