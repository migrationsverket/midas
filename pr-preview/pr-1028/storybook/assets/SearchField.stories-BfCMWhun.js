import{r as m,f as l,j as t}from"./iframe-COBKNkIo.js";import{S as d}from"./SearchField-22AIMGbT.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BU9zCQrJ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-njDs9clp.js";import"./utils-Cawu88FS.js";import"./useLocalizedStringFormatter-5TCmV2CR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CgNJouZW.js";import"./useFocusRing-CvKJ5iP5.js";import"./index-C-3DmDn0.js";import"./index-BhECMZqo.js";import"./useFormValidation-UFN-ft0-.js";import"./useField-9hLn6ruD.js";import"./Button-DVN4emYY.js";import"./Hidden-DWdHgASM.js";import"./useLabels-DygN-rGJ.js";import"./useButton-B9wSSCM2.js";import"./search-DiW_-3VH.js";import"./createLucideIcon-CRw8Ded6.js";import"./ClearButton-BTpoHene.js";import"./Button-COjdwtTG.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CgpNX7X7.js";import"./VisuallyHidden-vIshbz0f.js";import"./x-Dj_xkDq5.js";import"./FieldError-Dc4PcQjT.js";import"./Text-fShGFw3n.js";import"./Text-CtIfC9h2.js";import"./RSPContexts-C70LcTh5.js";import"./Collection-ORahdX2f.js";import"./index-CkZw-AsC.js";import"./DragAndDrop-BsxFFZSJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Br11R8Lo.js";import"./SelectionManager-c9AzP8-j.js";import"./useEvent-eTIvht7u.js";import"./useDescription-CxjHqdVd.js";import"./inertValue-CcKKKiuQ.js";import"./useHighlightSelectionDescription-2iLn_dD4.js";import"./useUpdateEffect-DiKf_ziZ.js";import"./ListKeyboardDelegate-CCRA5f7Y.js";import"./useHasTabbableChild-BmD0zWNz.js";import"./Checkbox-BJtMr-7e.js";import"./Form-CrqQ6pcU.js";import"./check-BpluVbWu.js";import"./useToggleState-BXn7YFUz.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
