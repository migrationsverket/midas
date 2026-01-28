import{r as m,f as l,j as t}from"./iframe-BUyS91gW.js";import{S as d}from"./SearchField-B_SJDW4H.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C_2WowCA.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-pY5KefEA.js";import"./utils-DtC5DJlv.js";import"./useLocalizedStringFormatter-DVHPDbxU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BfyVSh_-.js";import"./useFocusRing-BaIAxEeU.js";import"./index-fSOK1slO.js";import"./index-BdrDW8xm.js";import"./useFormValidation-C60WEHmq.js";import"./useField-DOrPhly4.js";import"./Button-BFrQimfv.js";import"./Hidden-DgRACCJZ.js";import"./useLabels-Tbmfxorq.js";import"./useButton-CnjpyvMJ.js";import"./search-BglVZkn4.js";import"./createLucideIcon-B-WbV5NM.js";import"./ClearButton-C_sGdIZ0.js";import"./Button-Fgf1rOG6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-p_nb56wi.js";import"./VisuallyHidden-DWShOfIn.js";import"./x-DZYUY6bl.js";import"./FieldError-CFfhbF8H.js";import"./Text-BPqpCryx.js";import"./Text-COkIx5pS.js";import"./RSPContexts--MjZDMmy.js";import"./Collection-Dh_MMJJ4.js";import"./index-C4j6v36i.js";import"./DragAndDrop-CSPev3rX.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CxkyDs28.js";import"./SelectionManager-BcWkh7qF.js";import"./useEvent-Cv6pNzgP.js";import"./useDescription-BGG01yMW.js";import"./inertValue-w8dJoYKL.js";import"./useHighlightSelectionDescription-BP-IL1Lt.js";import"./useUpdateEffect-DgSe21kE.js";import"./ListKeyboardDelegate-CP2zV0zS.js";import"./useHasTabbableChild-q5q2yXuu.js";import"./Checkbox-BTPM0ImD.js";import"./Form-CRbbeAt1.js";import"./check-BAipwjYf.js";import"./useToggleState-DlVTDabw.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
