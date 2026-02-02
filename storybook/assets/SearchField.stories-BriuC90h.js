import{r as m,f as l,j as t}from"./iframe-BXi2DpH_.js";import{S as d}from"./SearchField-BhCWJuke.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BEhUi7TU.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DQtA95JU.js";import"./utils-UrQDo-WA.js";import"./useLocalizedStringFormatter-CsL1ogvc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DSPSaBob.js";import"./useFocusRing-Bp5DTDVQ.js";import"./index-17Nv7B4H.js";import"./index-D7HPdSS2.js";import"./useFormValidation-Dc7GaW6e.js";import"./useField-DeikWbC4.js";import"./Button-8PW_0Mpf.js";import"./Hidden-D0eHPLgG.js";import"./useLabels-CzvTrbyR.js";import"./useButton-Dhmm4yPW.js";import"./search-l0TxcE2F.js";import"./createLucideIcon-tldxpU3K.js";import"./ClearButton-CxWaqCRh.js";import"./Button-kzBXQJaB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D1ci79sH.js";import"./VisuallyHidden-Cw60I5mf.js";import"./x-mQO-tW53.js";import"./FieldError-DAoi_8t4.js";import"./Text-DIwVLx6b.js";import"./Text-BFe5T1zy.js";import"./RSPContexts-DF_vtBl9.js";import"./Collection-_V21lTNJ.js";import"./index-CoSyIhxP.js";import"./DragAndDrop-BQssYpZW.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DlNvi_i_.js";import"./SelectionManager-DQXRLc7X.js";import"./useEvent-Ct55YmLp.js";import"./useDescription-CvRpVEPx.js";import"./inertValue-BuKV9xWv.js";import"./useHighlightSelectionDescription-DUvpLpcR.js";import"./useUpdateEffect-n_suxc1k.js";import"./ListKeyboardDelegate-d2r8cszs.js";import"./useHasTabbableChild-DOjVpikV.js";import"./Checkbox-KDrz_lgJ.js";import"./Form-D8qdwCWa.js";import"./check-Bk4SvjEK.js";import"./useToggleState-Btry2CtA.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
