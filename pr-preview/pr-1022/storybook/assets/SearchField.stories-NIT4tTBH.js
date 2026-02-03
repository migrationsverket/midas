import{r as m,f as l,j as t}from"./iframe-Yd_3Uapz.js";import{S as d}from"./SearchField-BhHwisRb.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D-7VgWGR.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CcJGCIAf.js";import"./utils-6lRm6Tee.js";import"./useLocalizedStringFormatter-I01atqXI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C0KmbMod.js";import"./useFocusRing-BXLc5uur.js";import"./index-7qq0zYgX.js";import"./index-BOW1adYN.js";import"./useFormValidation-BuYW0ODW.js";import"./useField-Cd_M8AeU.js";import"./Button-CtSuRHbF.js";import"./Hidden-DV_FdnSF.js";import"./useLabels-CBAQ5XKc.js";import"./useButton-BBbRN2vI.js";import"./search-BIeh7H92.js";import"./createLucideIcon-BG79myAo.js";import"./ClearButton-CvEsHz55.js";import"./Button-r50ETdbi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-02LtWaa0.js";import"./VisuallyHidden-DlJI08Uo.js";import"./x-CszsXm-U.js";import"./FieldError-nG5jWdlR.js";import"./Text-Ppy1xlW_.js";import"./Text-B4Lb8X2G.js";import"./RSPContexts-E-uPdC6l.js";import"./Collection-DOCXhwSD.js";import"./index-CP2WQlQA.js";import"./DragAndDrop-6xR4XDps.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BrIFsEya.js";import"./SelectionManager-pVgmciQy.js";import"./useEvent-DeXrWnv_.js";import"./useDescription-BugULMIn.js";import"./inertValue-_AoiCreQ.js";import"./useHighlightSelectionDescription-DokQ1mkv.js";import"./useUpdateEffect-koX1V-4M.js";import"./ListKeyboardDelegate-Cj2F-fBs.js";import"./useHasTabbableChild-BNBF_EDv.js";import"./Checkbox-D9rM8NKQ.js";import"./Form-BaJRF_22.js";import"./check-B7cXIKOD.js";import"./useToggleState-J58ZR5dX.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
