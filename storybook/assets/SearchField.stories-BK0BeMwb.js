import{r as m,f as l,j as t}from"./iframe-BDBC-eBH.js";import{S as d}from"./SearchField-CR7KVBOe.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D-CZ6SvV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BF3dZFMw.js";import"./clsx-B-dksMZM.js";import"./Form-DtNN1KWP.js";import"./useFocusRing-CgfezvW6.js";import"./index-BWNKyBGD.js";import"./index-C54ey478.js";import"./Input-DtQ_nr1F.js";import"./Hidden-BOnSBQrS.js";import"./Button-C0bwvCnL.js";import"./useLabels-C2GA6JVF.js";import"./useButton-CdFak1iR.js";import"./FieldError-ATBv1U6u.js";import"./Text-DO7PXPW2.js";import"./clsx-Ciqy0D92.js";import"./Text-B8jtlyCQ.js";import"./RSPContexts-BqLHknP6.js";import"./Group-AOmzFapS.js";import"./useControlledState-BUM3bHka.js";import"./useLocalizedStringFormatter-DJ0cN-Xn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DIKuKkhg.js";import"./useField-BV9_GpNs.js";import"./TextField.module-DdivwlC8.js";import"./search-DRPpcEvj.js";import"./createLucideIcon-B9PoiMSr.js";import"./x-k_b3OfRX.js";import"./useLocalizedStringFormatter-C0PyQwpA.js";import"./Button-z3f5m6Cn.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cj48UhMD.js";import"./Collection-D9GufsRS.js";import"./index-DacEL6WZ.js";import"./DragAndDrop-B1o-SbGO.js";import"./getScrollParent-CCOLkLjE.js";import"./scrollIntoView-DiugVx5R.js";import"./SelectionIndicator-wn9XV9Cs.js";import"./SelectionManager-BcCkiuN_.js";import"./useEvent-DajtHI1Q.js";import"./useDescription-BjmAj66h.js";import"./inertValue-DenHMlWs.js";import"./useHighlightSelectionDescription-CPbj7yoi.js";import"./useUpdateEffect-2dErOR9z.js";import"./ListKeyboardDelegate-B2SKj4TS.js";import"./useHasTabbableChild-C5Il1b7V.js";import"./Checkbox-1_GWwEWZ.js";import"./check-CPUWpziA.js";import"./useToggleState-CRStVO_-.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
