import{r as m,f as l,j as t}from"./iframe-FsNXgqe6.js";import{S as d}from"./SearchField-h6iwy5Xg.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cv31vLIN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CHHHSM11.js";import"./clsx-B-dksMZM.js";import"./Form-B6wupcKh.js";import"./useFocusRing-CRoVfTyE.js";import"./index-C-L_vO3C.js";import"./index-DR5yPJn1.js";import"./Input-Uwso7ecy.js";import"./Hidden-B6vp6jMs.js";import"./Button-BlUHKe-n.js";import"./useLabels-Dlx2sqNn.js";import"./useButton-Dvk9iXpB.js";import"./FieldError-p7x1oei0.js";import"./Text-CjmdaRq5.js";import"./clsx-Ciqy0D92.js";import"./Text-C8W6Aunw.js";import"./RSPContexts-L16IbbAV.js";import"./Group-Dxk1VQ4X.js";import"./useControlledState-cgOhGnIF.js";import"./useLocalizedStringFormatter-C2slbsQF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-cLoVvWUX.js";import"./useField-C0plC4Rc.js";import"./TextField.module-DdivwlC8.js";import"./search-DfMLWDch.js";import"./createLucideIcon-Dz3AmHpK.js";import"./x-B7cAzNtk.js";import"./useLocalizedStringFormatter-XwSS7WVV.js";import"./Button-YzrNlavS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CDgolLOv.js";import"./Collection-DDaYa3-Y.js";import"./index--E2Dvaj6.js";import"./DragAndDrop-BhvTmRg9.js";import"./getScrollParent--flH2mcI.js";import"./scrollIntoView-C5rWQYSS.js";import"./SelectionIndicator-CvwVJIfe.js";import"./SelectionManager-h8lDah4m.js";import"./useEvent-ClOxTEoa.js";import"./useDescription-B03GWqqQ.js";import"./inertValue-6OSm-XSj.js";import"./useHighlightSelectionDescription-BSBWdX7M.js";import"./useUpdateEffect-Bgv144H7.js";import"./ListKeyboardDelegate-CFzjx7yi.js";import"./useHasTabbableChild-BSby5JDy.js";import"./Checkbox-BoXbZsfq.js";import"./check-CCWeZY36.js";import"./useToggleState-CcGsJUPB.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
